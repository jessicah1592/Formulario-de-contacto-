export default function PortfolioInfo() {
  const servicios = [
    {
      titulo: 'Identidad Visual & Branding',
      desc: 'Logotipos, guías de estilo, paletas cromáticas y sistemas visuales completos.',
      icono: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      titulo: 'Diseño Publicitario & Social Media',
      desc: 'Campañas gráficas de alto impacto para medios digitales e impresos.',
      icono: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      titulo: 'Diseño UI & Experiencia Visual',
      desc: 'Interfaces modernas centradas en el usuario con atención obsesiva al detalle.',
      icono: (
        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          <span>🎨</span> Portafolio Creativo 2026
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Transformemos tus ideas en{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            experiencias visuales memorables.
          </span>
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          Soy Carlos, diseñador gráfico enfocado en construir identidades de marca que destacan y comunican con claridad. Cuéntame sobre tu proyecto y creemos algo increíble juntos.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-800/80">
        <div>
          <span className="block text-2xl sm:text-3xl font-extrabold text-white">5+</span>
          <span className="text-xs text-slate-400">Años de experiencia</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-extrabold text-white">85+</span>
          <span className="text-xs text-slate-400">Marcas diseñadas</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-extrabold text-white">100%</span>
          <span className="text-xs text-slate-400">Satisfacción</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Especialidades creativas
        </h3>
        <div className="space-y-3">
          {servicios.map((s, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition-colors flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                {s.icono}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{s.titulo}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Tegucigalpa, Honduras</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Respuesta promedio: &lt; 24 hrs</span>
        </div>
      </div>
    </div>
  )
}
