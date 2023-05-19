import Image from "next/image"

function Header() {
  return (
<div className="flex align-center space-x-2 md:space-x-16">
<img
    src="https://rb.gy/ulxxee"
    width={100}
    height={100}
    alt="netflix-title"/> 
<ul className="hidden space-x-4 md:flex">
  <li>Home</li>
  <li>TV Shows</li>
  <li>Movies</li>
  <li>New & Popular</li>
  <li>My List</li>
</ul>
</div>
  )
}

export default Header