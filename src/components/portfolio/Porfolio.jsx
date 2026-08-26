import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { products } from '../../data/portfolio'

const ProductVisual = ({ product }) => (
  <div className={`product-visual product-visual-${product.visual}`} aria-hidden="true">
    <span className="product-visual-index">{product.number}</span>
    <span className="product-visual-mark">{product.mark}</span>
    <div className="device-shell">
      <div className="device-top" />
      <div className="device-screen">
        <span className="screen-kicker">{product.name}</span>
        <strong>{product.kicker}</strong>
        <div className="screen-lines"><i /><i /><i /></div>
      </div>
    </div>
    <span className="visual-word">{product.name}</span>
  </div>
)

const Portfolio = () => (
  <section className="products-section" id="products" aria-labelledby="products-title">
    <div className="section-shell">
      <div className="section-heading products-heading">
        <p className="eyebrow">Products I&apos;ve built</p>
        <h2 id="products-title">Ideas, carried all the way to product.</h2>
        <p>Four very different products. One consistent approach: understand the real problem, make the experience clear, and engineer it to last.</p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <article className="product-case" key={product.name}>
            <ProductVisual product={product} />
            <div className="product-copy">
              <div className="product-meta">
                <span>{product.number}</span>
                <span>{product.role}</span>
              </div>
              <h3>{product.name}</h3>
              <p className="product-kicker">{product.kicker}</p>
              <p className="product-description">{product.description}</p>
              <div className="tag-list">
                {product.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              {product.link && (
                <a className="product-live-link" href={product.link} target="_blank" rel="noreferrer">
                  Visit {product.name} <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Portfolio
