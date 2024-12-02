export default function Quote(props){
    const {quote,handleGetQuote,author}=props;
    return(
    <div id="quote-box">
        <div id="text">
            {quote || "Click the button to get a quote!"}
            <div id="author">
                {author}
        </div>
        </div>
        <div className="footer">
        <button className="btn btn-light" id="new-quote" onClick={handleGetQuote}>New Quote</button>
        <button className="btn btn-light"><a id="tweet-quote" href="http://twitter.com/intent/tweet"><i className="fa-brands fa-twitter"></i></a></button>
        </div>
        
    </div>
    )
}