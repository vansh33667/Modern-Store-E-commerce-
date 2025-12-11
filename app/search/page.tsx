import AdvancedSearchBar from "@/components/advanced-search-bar"
import SearchResultsPage from "@/components/search-results-page"

export const metadata = {
  title: "Search - Advanced Search",
  description: "Search products with AI, voice, and image search capabilities",
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <AdvancedSearchBar />
        </div>

        {/* Results */}
        <SearchResultsPage />
      </div>
    </main>
  )
}
