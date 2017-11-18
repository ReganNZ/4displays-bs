import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
    const { markdownRemark: product } = data;
    return (
        <section className="section">
            <Helmet title={`Blog | ${product.frontmatter.title}`} />
            <div className="container content">
                <h1 className="title is-size-2 has-text-info is-bold-light">{product.frontmatter.title}</h1>
                <h3 className="title is-size-6 has-text-info is-bold-light">{product.frontmatter.sku}</h3>
                <div>price: NZD ${product.frontmatter.price}</div>

                <div dangerouslySetInnerHTML={{ __html: product.html }} />

                <button
                    className="snipcart-add-item"
                    data-item-id={product.frontmatter.sku}
                    data-item-name={product.frontmatter.title}
                    // data-item-price={product.frontmatter.price}
                    data-item-weight={product.frontmatter.weight}
                    data-item-url="http://myapp.com/products/bacon"
                    data-item-description={product.frontmatter.intro}>
                    Add to Cart
</button>
            </div>
        </section>
    );
}

export const productsPageQuery = graphql`
  query ProductsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        intro
        #price {}
        sku
        weight
        
      
      }
    }
  }
`;