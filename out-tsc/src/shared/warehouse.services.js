const URL_PREFIX = 'http://localhost:7000/';
export async function fetchProducts() {
    return await Promise.all([
        fetch(`${URL_PREFIX}products/`),
        fetch(`${URL_PREFIX}articles/`),
        fetch(`${URL_PREFIX}sales/`),
    ])
        .then(responses => {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    })
        .then(([products, articles, sales]) => {
        console.log([products, articles, sales]);
        // check type of product
        return products.map((product) => {
            var _a, _b;
            return ({
                ...product,
                articles: (_a = product.articles) === null || _a === void 0 ? void 0 : _a.map(article => {
                    var _a;
                    return ({
                        ...article,
                        name: (_a = articles.find((art) => art.id === article.id)) === null || _a === void 0 ? void 0 : _a.name,
                    });
                }),
                amountInStock: (_b = product.articles) === null || _b === void 0 ? void 0 : _b.reduce((acc, curr) => {
                    const article = articles.find((art) => art.id === curr.id);
                    if (!article || article.amountInStock === 0) {
                        return 0;
                    }
                    const soldArticle = sales.find((sale) => sale.productId === curr.id);
                    if (soldArticle) {
                        const available = Math.trunc((article.amountInStock - soldArticle.amountSold) /
                            curr.amountRequired);
                        return acc > -1 ? (available < acc ? available : acc) : available;
                    }
                    const available = Math.trunc(article.amountInStock / curr.amountRequired);
                    return acc > -1 ? (available < acc ? available : acc) : available;
                }, -1),
            });
        });
    });
    /* return await fetch(`${URL_PREFIX}products/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response is not ok');
        }
        return response.json();
      })
      .then(async products => {
        const artciles = await fetch(`${URL_PREFIX}products/`);
        const sales = await fetch(`${URL_PREFIX}products/`);
  
        return [products, artciles.json(), sales.json()];
      })
      .then(data => {
        console.log(data);
        return data[0];
      }); */
}
/* const uniqueArt = products.reduce((acc: string[], curr: Product) => {
        curr.articles.map(article => {
          if (!acc.includes(article.id)) {
            acc.push(article.id);
          }
        });
        return acc;
      }, []);
       */
//# sourceMappingURL=warehouse.services.js.map