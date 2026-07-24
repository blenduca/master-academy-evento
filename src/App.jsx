import { useEffect, useState } from 'react'
import {
  Calendar, Clock, Wifi, Tag, Check, X, Users, Scale, Layers, Rocket,
  Sprout, Whatsapp, ArrowRight, AlertTriangle, FileSearch, TrendingDown,
  Target, Award, ChevronDown, Quote,
} from './Icons.jsx'

const CTA_URL = '#inscricao'
const EVENT_DATE = '2026-07-30T19:30:00' // 30 jul · 19h30

/* Resolve caminhos de /public respeitando o base do Vite (subpasta no
   GitHub Pages). Em dev BASE_URL é '/', no build é '/master-academy-evento/'. */
const asset = (p) => `${import.meta.env.BASE_URL}${p}`

/* Contagem regressiva até o evento — ecoa o urgency-timer da LP principal. */
function useCountdown(target) {
  const [left, setLeft] = useState('')
  useEffect(() => {
    const t = new Date(target).getTime()
    const pad = (n) => String(n).padStart(2, '0')
    const tick = () => {
      const diff = t - Date.now()
      if (diff <= 0) { setLeft('ao vivo agora'); return }
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff / 3600000) % 24)
      const m = Math.floor((diff / 60000) % 60)
      const s = Math.floor((diff / 1000) % 60)
      setLeft(`${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return left
}

/* Scroll-reveal: adiciona .is-visible quando o elemento entra na viewport.
   Inclui rede de segurança: se o IntersectionObserver não reportar (alguns
   webviews/ambientes), nada fica invisível. */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!els.length) return
    const reveal = (el) => el.classList.add('is-visible')

    if (!('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))

    // Se o observer não revelar nada do conteúdo acima da dobra logo no
    // carregamento, assumimos que ele não está reportando e revelamos tudo.
    const fallback = setTimeout(() => {
      if (!els.some((el) => el.classList.contains('is-visible'))) {
        io.disconnect()
        els.forEach(reveal)
      }
    }, 800)

    return () => {
      clearTimeout(fallback)
      io.disconnect()
    }
  }, [])
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Master Academy Agro">
          <img src={asset('logo-master.png')} alt="Master Academy Agro" className="nav__logo" />
        </a>
        <div className="nav__right">
          <span className="nav__date"><Calendar /> 30 jul · 19h30</span>
          <a href={CTA_URL} className="btn-secondary">Garantir vaga</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const countdown = useCountdown(EVENT_DATE)
  return (
    <header className="hero" id="top">
      {/* Vídeo de fundo — drone sobre colheita no campo. Poster agro garante
          uma cena rural imediata antes/na falta do vídeo. */}
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        poster={asset('hero-agro.jpg')}
        preload="auto"
      >
        <source src={asset('hero-agro.mp4')} type="video/mp4" />
      </video>
      <div className="hero__overlay" />

      <div className="container hero__content">
        <div className="hero__badges reveal">
          <span className="badge badge--accent"><Calendar /> 30 JUL · 19H30</span>
          <span className="badge"><Wifi /> Online e grátis</span>
        </div>

        <h1 className="hero__headline reveal">
          Descubra se a sua propriedade rural <span>está pagando mais imposto do que deveria.</span>
          <span className="hero__headline-sub">A Reforma já chegou na sua propriedade.</span>
        </h1>

        <p className="hero__subtitle reveal">
          Ao vivo, com o <strong>Diagnóstico Tributário Rural</strong> — a ferramenta
          exclusiva do Prof. Danilo. Sem juridiquês.
        </p>

        <div className="hero__cta-wrap reveal">
          <a href={CTA_URL} className="btn-primary btn-primary--lg btn-primary--pulse">
            Quero minha vaga grátis <ArrowRight />
          </a>

          <div className="hero__countdown">
            <Clock className="hero__countdown-icon" />
            <span className="hero__countdown-text">
              O evento ao vivo começa em:
              <strong>{countdown}</strong>
            </span>
          </div>

          <span className="hero__cta-hint">
            <Whatsapp /> Vagas limitadas · você entra na comunidade no WhatsApp.
          </span>
        </div>

        <ul className="hero__meta reveal">
          <li><Calendar /> 30 de julho</li>
          <li><Clock /> 19h30</li>
          <li><Wifi /> Via YouTube</li>
          <li><Tag /> Gratuito</li>
        </ul>
      </div>

      <span className="hero__scroll" aria-hidden="true"><ChevronDown /></span>
    </header>
  )
}

function Pain() {
  const quotes = [
    'Nunca paguei imposto — e agora vão me cobrar.',
    'Preciso emitir nota e não sei por onde começar.',
    'PF ou PJ? Não sei o que é melhor pra mim.',
    'Tenho medo de ser autuado pela Receita.',
  ]
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section-head pain-intro reveal">
          <span className="eyebrow eyebrow--danger"><AlertTriangle /> A dor</span>
          <h2 className="h2">A Reforma já chegou na sua propriedade rural.</h2>
          <p className="lead">
            IBS e CBS mudam tudo pra quem produz. Quem fica parado, paga mais.
          </p>
        </div>

        <p className="pain-bridge reveal">Soa familiar?</p>

        <div className="quotes-grid">
          {quotes.map((q, i) => (
            <figure className="quote-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <Quote className="quote-card__mark" />
              <blockquote>{q}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Discover() {
  const items = [
    { icon: <Scale />, title: 'O que muda com IBS e CBS', text: 'Na língua do campo — sem termos que ninguém entende.' },
    { icon: <Users />, title: 'PF ou PJ', text: 'O enquadramento certo pro seu caso, na prática.' },
    { icon: <Layers />, title: '3 estratégias pra aplicar já', text: 'Ações que você coloca em prática ainda essa semana.' },
    { icon: <Rocket />, title: 'Largar na frente', text: 'Como se posicionar na transição 2026–2033.' },
  ]
  return (
    <section className="section section--offwhite">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">O que você vai descobrir</span>
          <h2 className="h2">No dia 30, você não ouve teoria. Você diagnostica.</h2>
          <p className="lead discover__intro reveal">
            Por isso, no dia 30 de julho, às 19h30, vamos realizar uma palestra gratuita e apresentar
            a ferramenta de <strong>Diagnóstico Tributário Rural</strong>. Em poucos minutos, você vai
            responder algumas perguntas e descobrir se a sua propriedade está pagando mais imposto do
            que deveria e conhecer oportunidades de planejamento tributário para a sua realidade.
          </p>
        </div>
        <div className="features-grid">
          {items.map((it, i) => (
            <article className="feature-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="feature-card__num">0{i + 1}</span>
              <div className="icon-box">{it.icon}</div>
              <h4>{it.title}</h4>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tool() {
  const reveals = [
    { icon: <TrendingDown />, text: 'Se a sua propriedade está pagando mais imposto do que deveria.' },
    { icon: <Target />, text: 'O enquadramento ideal pro seu caso' },
    { icon: <FileSearch />, text: 'Um plano claro pra transição da Reforma' },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="tool-block reveal">
          <div className="tool-block__content">
            <span className="label-pill">Entregável exclusivo</span>
            <h3 className="h3 text-green">O Diagnóstico Tributário Rural</h3>
            <p className="tool-block__hook">
              A ferramenta exclusiva — só aqui. Em poucos minutos, ela analisa a sua atividade rural
              e mostra se a sua propriedade está pagando mais imposto do que deveria, apresentando
              oportunidades de planejamento tributário. Você faz o seu ao vivo, de graça.
            </p>
            <ul className="tool-reveals">
              {reveals.map((r, i) => (
                <li key={i}><span className="tool-reveals__icon">{r.icon}</span> {r.text}</li>
              ))}
            </ul>
            <a href={CTA_URL} className="btn-primary">
              Quero fazer o meu <ArrowRight />
            </a>
          </div>

          <div className="tool-block__media">
            <div className="diagnostic-card">
              <div className="diagnostic-card__head">
                <span className="diagnostic-card__chrome">
                  <span className="diagnostic-card__dot" />
                  <span className="diagnostic-card__dot" />
                  <span className="diagnostic-card__dot" />
                </span>
                <span className="diagnostic-card__title"><FileSearch /> Diagnóstico Tributário Rural</span>
              </div>
              <div className="diagnostic-card__body">
                <div className="diagnostic-result">
                  <div>
                    <span className="diagnostic-result__label">Economia estimada / ano</span>
                    <span className="diagnostic-result__value">R$ 38.400</span>
                  </div>
                  <span className="diagnostic-result__badge"><TrendingDown /> imposto a menos</span>
                </div>

                <div className="diagnostic-bars">
                  <div className="diagnostic-bar">
                    <span className="diagnostic-bar__name">Imposto hoje</span>
                    <span className="diagnostic-bar__track"><span className="diagnostic-bar__fill diagnostic-bar__fill--high" /></span>
                    <span className="diagnostic-bar__tag diagnostic-bar__tag--high">Alto</span>
                  </div>
                  <div className="diagnostic-bar">
                    <span className="diagnostic-bar__name">Com o plano</span>
                    <span className="diagnostic-bar__track"><span className="diagnostic-bar__fill diagnostic-bar__fill--low" /></span>
                    <span className="diagnostic-bar__tag diagnostic-bar__tag--low">−42%</span>
                  </div>
                </div>

                <div className="diagnostic-card__foot">
                  <span className="diagnostic-card__foot-icon"><Check /></span>
                  <span>Enquadramento recomendado<strong>PJ — Lucro Presumido</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Audience() {
  const yes = [
    'Produtor rural (PF ou PJ) impactado pela Reforma.',
    'Filho ou gestor que assumiu a propriedade rural.',
    'Quem quer pagar menos imposto, de forma legal.',
  ]
  const no = [
    'Não tem relação com o agro.',
    'Procura consultoria individual 1:1.',
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Para quem é</span>
          <h2 className="h2">Esse evento foi feito sob medida.</h2>
        </div>
        <div className="audience-grid">
          <div className="audience-card audience-card--yes reveal">
            <span className="audience-card__flag">Feito pra você</span>
            <h3><span className="audience-card__icon audience-card__icon--yes"><Check /></span> É pra você</h3>
            <ul className="audience-list">
              {yes.map((t, i) => (
                <li key={i}><Check /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="audience-card audience-card--no reveal" style={{ transitionDelay: '0.08s' }}>
            <h3><span className="audience-card__icon audience-card__icon--no"><X /></span> Não é pra você</h3>
            <ul className="audience-list">
              {no.map((t, i) => (
                <li key={i}><X /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Host() {
  return (
    <section className="section section--lavoura">
      <div className="container">
        <div className="host-grid">
          <div className="host-photo reveal">
            <img
              src={asset('danilo.jpg')}
              alt="Prof. Danilo Polacinski"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = asset('placeholder-host.svg') }}
            />
            <span className="host-photo__tag"><Award /> Quem conduz</span>
          </div>
          <div className="host-content reveal" style={{ transitionDelay: '0.08s' }}>
            <span className="eyebrow">Quem conduz</span>
            <h2 className="h2 host-content__name">Prof. Danilo Polacinski</h2>
            <p className="host-content__role">Especialista em Tributação do Agro</p>
            <p className="host-content__bio">
              Criador do Mapa de Tributação Rural. Fala a língua de quem está na lida
              — sem juridiquês, direto ao ponto que pesa no bolso do produtor.
            </p>
            <div className="host-credentials">
              <span className="cred-chip"><Sprout /> Especialista no agro</span>
              <span className="cred-chip"><Scale /> Tributação rural</span>
              <span className="cred-chip"><Layers /> Mapa de Tributação Rural</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Social() {
  return (
    <section className="section section--offwhite">
      <div className="container">
        <figure className="testimonial reveal">
          <Quote className="testimonial__watermark" />
          <span className="eyebrow">Prova social</span>
          <blockquote className="testimonial__quote">
            Produtores que nunca tinham ouvido falar de IBS ou CBS saíram com um{' '}
            <span className="text-green">plano claro.</span>
          </blockquote>
          <figcaption className="testimonial__author">
            <span className="testimonial__author-mark"><Sprout /></span>
            <span>
              <strong>Produtores rurais</strong>
              Relato de edições anteriores
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function Faq() {
  const faqs = [
    { q: 'Não sou contador. É pra mim?', a: 'É feito pra você — não pro contador.' },
    { q: 'É pago?', a: 'Não. 100% grátis e online.' },
    { q: 'Quanto dura?', a: 'Uma noite, a partir das 19h30. Acesse com antecedência.' },
    { q: 'Vai ter oferta?', a: 'No fim, uma condição especial só pra quem estiver ao vivo.' },
  ]
  return (
    <section className="section section--offwhite">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Dúvidas rápidas</span>
          <h2 className="h2">Antes de garantir sua vaga.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((f, i) => (
            <article className="faq-item reveal" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
              <span className="faq-item__icon"><ChevronDown /></span>
              <div>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const WHATSAPP_URL = 'https://chat.whatsapp.com/LFyrAZT27T6EwdLyr2C3Rf?s=sw&p=a&ilr=0&amv=0'
const WEBHOOK_URL = 'https://automacao.bagents.cloud/webhook/3de63e10-5469-464b-938f-af8f476445c8'

/* Coleta os parâmetros UTM presentes na URL atual. */
function getUtmParams() {
  const params = new URLSearchParams(window.location.search)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const utms = {}
  utmKeys.forEach((key) => {
    const val = params.get(key)
    if (val) utms[key] = val
  })
  return utms
}

function FinalCta() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nome: '', whatsapp: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.nome.trim() || !form.whatsapp.trim()) return
    setLoading(true)

    const payload = {
      nome: form.nome.trim(),
      whatsapp: form.whatsapp.trim(),
      ...getUtmParams(),
      page_url: window.location.href,
      submitted_at: new Date().toISOString(),
    }

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (_err) {
      // Falha silenciosa — o usuário não é bloqueado se o webhook falhar
    }

    setLoading(false)
    // Apenas exibe a tela de obrigado — NÃO abre o WhatsApp automaticamente.
    // O usuário precisa clicar no botão "Entrar no grupo" para acionar o evento
    // de conversão que a Meta usa para otimização.
    setSubmitted(true)
  }

  // Handler do botão "Entrar no grupo do WhatsApp".
  // Dispara o evento de conversão para a Meta e então abre o link.
  const handleWhatsappClick = () => {
    // Dispara o evento de conversão para o Meta Pixel (Lead / Contact)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead')
    }
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section section--cta" id="inscricao">
      <div className="container">
        <div className="final-cta reveal">
          {submitted ? (
            <>
              <span className="eyebrow">Inscrição confirmada 🎉</span>
              <h2 className="h2">
                Vaga garantida!<br />
                <span className="text-green">Clique abaixo para entrar no grupo.</span>
              </h2>
              <button
                id="btn-entrar-grupo-whatsapp"
                onClick={handleWhatsappClick}
                className="btn-primary btn-primary--xl"
                type="button"
              >
                <Whatsapp /> Entrar no grupo do WhatsApp
              </button>
              <ul className="final-cta__perks">
                <li><Check /> Vaga confirmada</li>
                <li><Check /> Acesso ao grupo exclusivo</li>
                <li><Check /> Diagnóstico Tributário Rural ao vivo</li>
              </ul>
            </>
          ) : (
            <>
              <span className="eyebrow">Garanta sua vaga</span>
              <h2 className="h2">
                Quem se prepara, ganha.<br />
                <span className="text-green">Quem fica parado, paga mais.</span>
              </h2>
              <form className="signup-form" onSubmit={handleSubmit} id="form-inscricao" noValidate>
                <div className="signup-form__field">
                  <label htmlFor="nome" className="signup-form__label">Seu nome</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    className="signup-form__input"
                    placeholder="Como podemos te chamar?"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="signup-form__field">
                  <label htmlFor="whatsapp" className="signup-form__label">WhatsApp (com DDD)</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    className="signup-form__input"
                    placeholder="(99) 99999-9999"
                    value={form.whatsapp}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                  />
                </div>
                <button
                  type="submit"
                  id="btn-quero-minha-vaga"
                  className={`btn-primary btn-primary--xl btn-primary--pulse signup-form__submit ${loading ? 'signup-form__submit--loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Confirmando...' : <><span>Quero Minha Vaga</span> <ArrowRight /></>}
                </button>
              </form>
              <ul className="final-cta__perks">
                <li><Check /> Vaga garantida</li>
                <li><Check /> Comunidade no WhatsApp</li>
                <li><Check /> Ferramenta exclusiva</li>
              </ul>
              <p className="final-cta__hint">
                30 jul · 19h30 · grátis · via YouTube · <strong>vagas limitadas.</strong>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand-col">
          <img src={asset('logo-master.png')} alt="Master Academy Agro" className="footer__logo" />
          <p className="footer__desc">
            Super Evento Master Academy <span className="text-green">Agro</span> — o
            Diagnóstico Tributário Rural ao vivo, na língua do campo.
          </p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__col-title">Evento</span>
            <span><Calendar /> 30 jul · 19h30</span>
            <span><Wifi /> Via YouTube · gratuito</span>
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Master Academy</span>
            <a href="https://academymaster.com.br" target="_blank" rel="noreferrer">academymaster.com.br</a>
            <a href={CTA_URL}>Garantir minha vaga</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 Master Academy Agro. Todos os direitos reservados.</span>
        <span>Realização: Master Academy + Blenduca.</span>
      </div>
    </footer>
  )
}

function StickyCta() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={`sticky-cta ${show ? 'sticky-cta--show' : ''}`}>
      <div className="sticky-cta__info">
        <strong>Super Evento · 30 jul</strong>
        <span>19h30 · YouTube · grátis</span>
      </div>
      <a href={CTA_URL} className="btn-primary sticky-cta__btn">
        Quero minha vaga <ArrowRight />
      </a>
    </div>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <Pain />
      <Discover />
      <Tool />
      <Host />
      <Social />
      <Audience />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyCta />
    </>
  )
}
