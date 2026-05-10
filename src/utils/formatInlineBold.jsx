/** Renders `**bold**` segments as <strong>; returns nodes for use inside <p>. */
export function renderInlineBold(text) {
  if (text == null || text === '') return null
  const nodes = []
  const re = /\*\*(.+?)\*\*/g
  let last = 0
  let m
  let key = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    nodes.push(<strong key={key++}>{m[1]}</strong>)
    last = re.lastIndex
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes.length ? nodes : text
}
