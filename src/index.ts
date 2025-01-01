import { Hono } from 'hono'
import { html, raw } from 'hono/html'
const app = new Hono()

/* DISABLED as it is not currently used
app.get('/img/:key', async (c) => {
    const key = `img/${c.req.param("key")}`;
    const object = await c.env.R2_BUCKET.get(key);

    if (!object) return c.notFound();

    const data = await object.arrayBuffer();
    const contentType = object.httpMetadata?.contentType || '';

    return c.body(data, 200, {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
        'Cache-Control': 'max-age=31536000', // 1 year
        'Content-Type': contentType,
        'ETag': object.httpEtag,
    });
});
*/

app.get('/', (c) => {
    // https://hono.dev/docs/helpers/html
    return c.html(html`<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="canonical" href="https://www.enduranceturtle.com/" />
    <meta name="description" content="endurance turtle: keep going, even at a turtle's pace">
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        #container {
            display: flex;
            align-items: center;
            justify-content: center;
            font: 62.5% sans-serif;
        }
        .definition {
            margin: 18% 5%;
            min-width: 256px;
            max-width: 568px;
        }
        .word {
            padding-bottom: 0.35rem;
            margin: 0 0 0.25rem 0;
            font-size: 2rem;
            font-weight: normal;
        }
        .pronunciation {
            padding: 0 0 0.35rem 0.5rem;
            border-left: 2px solid #222;
            font-weight: bold;
            white-space: nowrap;
        }
        .explaination {
            margin: 0;
            font-size: 1.15rem;
            text-align: justify;
        }
        .meta {
            color: grey;
            font-size: 1.1rem;
        }
    </style>
</head>
<body>
    <section id="container">
        <article class="definition container">
            <h1 class="word">
                endurance&nbsp;turtle
                <strong class="pronunciation">enˈd(y)&ocirc;rəns,&nbsp;ˈtərdl</strong>
            </h1>
            <p class="explaination">
                <span class="meta">Action: (noun)</span> keep going, even at a turtle's&nbsp;pace.
            </p>
        </article>
    </section>
</body>
</html>
`)
});

export default app