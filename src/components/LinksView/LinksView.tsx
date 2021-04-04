import styles from "./LinksView.module.css"

export default function LinksView({url, description, hook, youtubeUrl=false}: any) {

  



    return(
    <section>
    <div className = {styles.hook}>{hook}</div> 
    <div className="card" style={{width: "18rem;"}}>        
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={url} className="card-link">Card link</a>
   
  </div> 
   </div>
    </section>
    
    );

   
}   