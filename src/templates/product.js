import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
    const { markdownRemark: post } = data;
    return (
        <section className="section">
            <Helmet title={`Blog | ${post.frontmatter.title}`} />
            <div className="container content">
                <h1 className="title is-size-2 has-text-info is-bold-light">{post.frontmatter.title}</h1>
                <h3 className="title is-size-4 has-text-info is-bold-light">{post.frontmatter.intro}</h3>
                <h3 className="title is-size-6 has-text-info is-bold-light">{post.frontmatter.sku}</h3>
                <div>price: NZD ${post.frontmatter.price}</div>

                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <button
                    className="snipcart-add-item"
                    data-item-id={post.frontmatter.sku}
                    data-item-name={post.frontmatter.title}
                    data-item-price={post.frontmatter.price}
                    data-item-weight={post.frontmatter.weight}
                    data-item-url="http://myapp.com/products/bacon"
                    data-item-description={post.frontmatter.subtitle}>
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
        price
        sku
        weight
        
      
      }
    }
  }
`;