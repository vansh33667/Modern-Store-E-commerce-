export const ITEMS_PER_PAGE = 12 // Display 12 products per page

export function getPaginationData(items: any[], currentPage: number) {
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE)
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  const paginatedItems = items.slice(start, end)

  return {
    items: paginatedItems,
    currentPage,
    totalPages,
    totalItems: items.length,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  }
}

export function getPageNumbers(currentPage: number, totalPages: number, maxVisible = 5): number[] {
  const pages: number[] = []
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2))
  const endPage = Math.min(totalPages, startPage + maxVisible - 1)

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
}
