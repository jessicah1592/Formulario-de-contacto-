import { useState } from 'react'

export default function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const [tocado, setTocado] = useState({
    nombre: false,
    email: false,
    mensaje: false,
  })

  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [datosConfirmados, setDatosConfirmados] = useState(null)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const esNombreValido = nombre.trim().length >= 3
  const esEmailValido = emailRegex.test(email.trim())
  const esMensajeValido = mensaje.trim().length >= 10

  const formularioValido = esNombreValido && esEmailValido && esMensajeValido

  const obtenerErrorNombre = () => {
    if (!tocado.nombre) return ''
    if (nombre.trim().length === 0) return 'El nombre es obligatorio'
    if (nombre.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres'
    return ''
  }

  const obtenerErrorEmail = () => {
    if (!tocado.email) return ''
    if (email.trim().length === 0) return 'El correo electrónico es obligatorio'
    if (!esEmailValido) return 'Ingresa un formato de correo válido (ejemplo: usuario@correo.com)'
    return ''
  }

  const obtenerErrorMensaje = () => {
    if (!tocado.mensaje) return ''
    if (mensaje.trim().length === 0) return 'El mensaje es obligatorio'
    if (mensaje.trim().length < 10) return `Faltan ${10 - mensaje.trim().length} caracteres más para completar el mensaje`
    return ''
  }

  const handleBlur = (campo) => {
    setTocado((prev) => ({ ...prev, [campo]: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formularioValido) {
      setTocado({ nombre: true, email: true, mensaje: true })
      return
    }

    setCargando(true)

    setTimeout(() => {
      setDatosConfirmados({
        nombre: nombre.trim(),
        email: email.trim(),
        mensaje: mensaje.trim(),
        fecha: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      })
      setCargando(false)
      setEnviado(true)
      setNombre('')
      setEmail('')
      setMensaje('')
      setTocado({ nombre: false, email: false, mensaje: false })
    }, 1200)
  }

  const handleNuevoMensaje = () => {
    setEnviado(false)
    setDatosConfirmados(null)
  }

  if (enviado && datosConfirmados) {
    return (
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300">
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center">
          <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-xl shadow-emerald-500/20 mb-6 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-3">
            Envío Exitoso
          </span>

          <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            ¡Gracias por tu mensaje!
          </h3>

          <p className="mt-3 text-slate-300 max-w-md mx-auto leading-relaxed">
            Hola <span className="text-white font-semibold">{datosConfirmados.nombre}</span>, recibí tu solicitud correctamente. Te responderé al correo <span className="text-indigo-400 font-semibold">{datosConfirmados.email}</span> lo más pronto posible.
          </p>

          <div className="mt-8 p-5 bg-slate-950/70 border border-slate-800/80 rounded-2xl text-left max-w-md mx-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Resumen enviado</span>
              <span className="text-xs text-slate-500">{datosConfirmados.fecha}</span>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">
                <strong className="text-slate-300 font-medium">De:</strong> {datosConfirmados.nombre}
              </p>
              <p className="text-slate-400">
                <strong className="text-slate-300 font-medium">Email:</strong> {datosConfirmados.email}
              </p>
              <p className="text-slate-400">
                <strong className="text-slate-300 font-medium">Mensaje:</strong>{' '}
                <span className="text-slate-200 italic">"{datosConfirmados.mensaje}"</span>
              </p>
            </div>
          </div>

          <button
            onClick={handleNuevoMensaje}
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            Enviar otro mensaje
          </button>
        </div>
      </div>
    )
  }

  const errorNombre = obtenerErrorNombre()
  const errorEmail = obtenerErrorEmail()
  const errorMensaje = obtenerErrorMensaje()

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="mb-8">
          <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">
            Hablemos de tu idea
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Envíame un mensaje
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Completa todos los campos requeridos para habilitar el envío del formulario.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="nombre" className="block text-sm font-semibold text-slate-200">
                Nombre completo <span className="text-indigo-400">*</span>
              </label>
              {esNombreValido && (
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  Válido
                </span>
              )}
            </div>
            <div className="relative">
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                onBlur={() => handleBlur('nombre')}
                placeholder="Ej. Ana Morales"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all duration-200 ${
                  errorNombre
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                    : esNombreValido
                    ? 'border-emerald-500/60 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                    : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                }`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                {errorNombre && (
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
            </div>
            {errorNombre && (
              <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                <span>•</span> {errorNombre}
              </p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                Correo electrónico <span className="text-indigo-400">*</span>
              </label>
              {esEmailValido && (
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  Válido
                </span>
              )}
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="ana@estudio.com"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all duration-200 ${
                  errorEmail
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                    : esEmailValido
                    ? 'border-emerald-500/60 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                    : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                }`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                {errorEmail && (
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
            </div>
            {errorEmail && (
              <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                <span>•</span> {errorEmail}
              </p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-200">
                Mensaje <span className="text-indigo-400">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">
                  {mensaje.trim().length}/10 mín.
                </span>
                {esMensajeValido && (
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    Válido
                  </span>
                )}
              </div>
            </div>
            <div className="relative">
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                onBlur={() => handleBlur('mensaje')}
                placeholder="Cuéntame sobre tu marca, el proyecto o la idea que deseas desarrollar..."
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all duration-200 resize-none ${
                  errorMensaje
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                    : esMensajeValido
                    ? 'border-emerald-500/60 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                    : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                }`}
              />
            </div>
            {errorMensaje && (
              <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                <span>•</span> {errorMensaje}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!formularioValido || cargando}
              className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center transition-all duration-300 ${
                formularioValido && !cargando
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:brightness-110 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0'
                  : 'bg-slate-800/80 text-slate-500 cursor-not-allowed border border-slate-700/50'
              }`}
            >
              {cargando ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Enviando mensaje...</span>
                </>
              ) : (
                <>
                  <span>Enviar mensaje</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

            {!formularioValido && (
              <p className="text-center text-xs text-slate-500 mt-3">
                El botón se habilitará automáticamente al completar los 3 campos con información válida.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
