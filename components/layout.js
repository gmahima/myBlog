import Head from 'next/head'



function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Mahima</title>
            </Head>
            
            <div>
                <h1 className="font-bold text-6xl text-center">Mahima</h1>
                <div>
                    {children}
                </div>
            </div>
            
        </div>
        
    )
  }
  
  export default Layout