export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Store. All rights reserved.</p>
      </div>
    </footer>
  )
}