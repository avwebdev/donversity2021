import styles from "./VideoView.module.css"

export default function VideoView({url, description, author, youtubeUrl=false}: any) {
      
        if(youtubeUrl){
            return (
            <section>
      
          <div className="container flex-center">
            <div  className="row pt-54 mt-3" >
              <div className="col-lg-6 wow fadeIn mb-5 text-center text-lg-left">
                <div className="white-text">
                  <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Title</h1>
                  <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                  <p  className = "wow fadeInLeft" data-wow-delay="0.3s"  >{description}</p>
                  <br />
                  <div className="embed-responsive embed-responsive-16by9 wow fadeInRight">
                  <iframe className="embed-responsive-item" src = {youtubeUrl}
                          allowFullScreen></iframe>
                </div>
                <div className={styles.authorTag}><i className="mdi mdi-account-circle"></i>{author}</div>
                </div>
               
              </div>
             
              {/* <div className="col-lg-6 wow fadeIn">
                <div className="embed-responsive embed-responsive-16by9 wow fadeInRight">
                  <iframe className="embed-responsive-item" src = {youtubeUrl}
                          allowFullScreen></iframe>
                </div>
              </div> */}
            </div>
          </div>
  
      </section>
      );
        }

        
        return(<div></div>);
    
}