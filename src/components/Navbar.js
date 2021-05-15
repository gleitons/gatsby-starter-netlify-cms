import React from 'react'
import { Link } from 'gatsby'
import github from '../img/icon-mega.svg'
import logo from '../img/logo-mega-de-hoje.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="mega de hoje" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/resultados">
                Resultados
              </Link>              
              <Link className="navbar-item" to="/dicas">
                Dicas
              </Link>
              <Link className="navbar-item" to="/contato">
                Contato
              </Link>
              <Link className="navbar-item" to="/sobre">
                Sobre
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Mais..
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://megadehoje.com/resultados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
             <br />

  <ul id='random-posts'>
<script type='text/javaScript'>
var tow_numposts=1;
var tow_snippet_length=150;
var tow_info='no';
var tow_comment='Comments';
var tow_disable='Comments Disabled';
var tow_current=[];var tow_total_posts=0;var tow_current=new Array(tow_numposts);function totalposts(json){tow_total_posts=json.feed.openSearch$totalResults.$t}document.write('<script type=\"text/javascript\" src=\"https://geradordefrasesaleatorias.com/feeds/posts/default?alt=json-in-script&max-results=0&callback=totalposts\"><\/script>');function getvalue(){for(var i=0;i<tow_numposts;i++){var found=false;var rndValue=get_random();for(var j=0;j<tow_current.length;j++){if(tow_current[j]==rndValue){found=true;break}};if(found){i--}else{tow_current[i]=rndValue}}};function get_random(){var ranNum=1+Math.round(Math.random()*(tow_total_posts-1));return ranNum};
</script>
<script type='text/javaScript'>
function random_posts(json){for(var i=0;i<tow_numposts;i++){var entry=json.feed.entry[i];var tow_posttitle=entry.title.$t;if('content'in entry){var tow_get_snippet=entry.content.$t}else{if('summary'in entry){var tow_get_snippet=entry.summary.$t}else{var tow_get_snippet="";}};tow_get_snippet=tow_get_snippet.replace(/<[^>]*>/g,"");if(tow_get_snippet.length<tow_snippet_length){var tow_snippet=tow_get_snippet}else{tow_get_snippet=tow_get_snippet.substring(0,tow_snippet_length);var space=tow_get_snippet.lastIndexOf(" ");tow_snippet=tow_get_snippet.substring(0,space)+"…";};for(var j=0;j<entry.link.length;j++){if('thr$total'in entry){var tow_commentsNum=entry.thr$total.$t+' '+tow_comment}else{tow_commentsNum=tow_disable};if(entry.link[j].rel=='alternate'){var tow_posturl=entry.link[j].href;var tow_postdate=entry.published.$t;if('media$thumbnail'in entry){var tow_thumb=entry.media$thumbnail.url}else{tow_thumb="https://1.bp.blogspot.com/-OBcEZBKNR-8/YFzdlYxjuZI/AAAAAAAAWA0/8oqVSkReIAE6apNJ4OPUNwViG0T0WiljgCLcBGAsYHQ/s320/default.jpg"}}};document.write('<li>');document.write('<img alt="'+tow_posttitle+'" src="'+tow_thumb+'"/>');document.write('<div><a href="'+tow_posturl+'" rel="nofollow" title="'+tow_snippet+'">'+tow_posttitle+'</a></div>');if(tow_info=='yes'){document.write('<span>'+tow_postdate.substring(8,10)+'/'+tow_postdate.substring(5,7)+'/'+tow_postdate.substring(0,4)+' - '+tow_commentsNum)+'</span>'}document.write('<div style="clear:both"></div></li>')}};getvalue();for(var i=0;i<tow_numposts;i++){document.write('<script type=\"text/javascript\" src=\"https://geradordefrasesaleatorias.com/feeds/posts/default?alt=json-in-script&start-index='+tow_current[i]+'&max-results=1&callback=random_posts\"><\/script>')};
</script>
<p><a href="https://geradordefrasesaleatorias.com" rel="nofollow" title="Coloque um gerador de frases aleatórias como esse no seu site"><i> <span style="font-size: x-small;">Coloque frases aleatórias no seu site</span></i></a></p>
</ul>
<style type='text/css'>
#random-posts img{float:left;margin-right:10px;border:1px solid #999;background:#FFF;width:5px;height:5px;padding:3px}
#random-posts li{margin: 0px 0px 10px 0px;}
</style> 
  
  <br />
</div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
