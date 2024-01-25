import React from 'react'

export const Hero = () => {
  return (
    <div className="hero min-h-[750px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1580793241553-e9f1cce181af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Welcome to maket your best online shopping platform. Here you can get all variety of this, including Clothes, Groceries, Shoes, electronics, etc. Start scrolling to shop</p>
      <button className="btn btn-success text-white sm:hidden">Scroll Up</button>
    </div>
  </div>
</div>
  )
}
