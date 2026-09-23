import { useEffect, useRef, useState } from 'react'
import Menu from '../../components/menu/Menu'

/**
 * StyleGuide — visit /styleguide to see every type style with its live,
 * computed values. Edit the tokens in src/styles/typography.css and this
 * page updates with the rest of the site.
 */

const STYLES = [
  { key: 'h1', label: 'Heading 1', Tag: 'h1', sample: 'Rebecca Xiaoyi', className: '' },
  { key: 'h2', label: 'Heading 2', Tag: 'h2', sample: 'Cocoon', className: '' },
  {
    key: 'text',
    label: 'Text',
    Tag: 'p',
    sample:
      'Watercolor and mixed media work exploring emotional vulnerability, transformation, and the expressive nature of the figure.',
    className: '',
  },
  { key: 'subtext', label: 'Subtext', Tag: 'span', sample: 'Watercolor on paper · 2024', className: 'subtext' },
]

function Specimen({ label, Tag, sample, className }) {
  const ref = useRef(null)
  const [spec, setSpec] = useState(null)

  useEffect(() => {
    const cs = window.getComputedStyle(ref.current)
    setSpec({
      family: cs.fontFamily.split(',')[0].replace(/["']/g, ''),
      size: cs.fontSize,
      weight: cs.fontWeight,
      lineHeight: cs.lineHeight,
      tracking: cs.letterSpacing,
    })
  }, [])

  return (
    <section style={{ padding: '1.5rem 0', borderTop: '1px solid var(--color-accent)' }}>
      <span
        className="subtext"
        style={{ display: 'block', marginBottom: '0.75rem' }}
      >
        {label}
        {spec &&
          ` — ${spec.family}, ${spec.size}, weight ${spec.weight}, line height ${spec.lineHeight}, tracking ${spec.tracking}`}
      </span>
      <Tag ref={ref} className={className} style={{ display: 'block', margin: 0 }}>
        {sample}
      </Tag>
    </section>
  )
}

export default function StyleGuide() {
  return (
    <div>
      <Menu />
      <main
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '2rem 1.5rem',
          textAlign: 'left',
        }}
      >
        <h1>Style guide</h1>
        <p>
          Four type styles cover the whole site. Change them in{' '}
          <code>src/styles/typography.css</code>.
        </p>
        {STYLES.map(({ key, ...rest }) => (
          <Specimen key={key} {...rest} />
        ))}
      </main>
    </div>
  )
}
