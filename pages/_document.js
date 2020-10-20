import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
// import Constants from '../constants'

class MyDocument extends Document 
{
    static getInitialProps ({ renderPage }) 
    {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()

        return { html, head, errorHtml, chunks, styles }
    }

    render () 
    {
        return (
            <html lang="th">
                <Head>
 

                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#AB1E38" />
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                        crossorigin="anonymous"
                    />
                    <link rel="shortcut icon" href="/static/images/favicon.png" />

                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit:300,400,500,600,700&amp;subset=thai" />
                    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />

                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                    <link rel="stylesheet" href="/static/css/glide.core.min.css" />
                    <link rel="stylesheet" href="/static/css/glide.theme.min.css" />

                    {/*plyr*/}
                    <script src="https://cdn.plyr.io/3.5.6/plyr.js"></script>
                    <script src="https://cdn.plyr.io/3.5.6/plyr.polyfilled.js"></script>
                    <link rel="stylesheet" href="path/to/plyr.css" />
                    <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />

                    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

                    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>

                    <script src="https://cdn.omise.co/omise.js.gz"></script>

                    <script src="https://www.gstatic.com/firebasejs/6.2.2/firebase-app.js"></script>
                    <script src="https://www.gstatic.com/firebasejs/6.2.2/firebase-auth.js"></script>
                    {/* <script src="https://www.gstatic.com/firebasejs/6.2.2/firebase-database.js"></script> */}
                    <script src="https://www.gstatic.com/firebasejs/6.2.2/firebase-firestore.js"></script>
                    <script src="https://www.gstatic.com/firebasejs/6.2.2/firebase-functions.js"></script>
                    <script src="https://www.gstatic.com/firebasejs/6.2.2/firebase-storage.js"></script>
                    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

                    <script
                        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                        crossorigin></script>

                    <script
                        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                        crossorigin></script>

                    <script>var Alert = ReactBootstrap.Alert;</script>


                    {/* <script src={`/static/js/firebase.${Constants.env}.js`}></script> */}
                    <script src="/static/js/facebook.js"></script>
                </Head>
                <body>
     
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument