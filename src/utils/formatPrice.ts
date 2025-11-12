export function formatCurrency(value: string): string {
  const numeric = value.replace(/\D/g, '')

  if (!numeric) return ''

  const cents = parseInt(numeric, 10)

  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function unformatCurrency(value: string): string {
  const clean = value.replace(/[^\d,]/g, '').replace(',', '.')

  return clean
}