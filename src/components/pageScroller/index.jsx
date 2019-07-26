import * as React from "react";
import ReactPageScroller from "react-page-scroller";
import SideNav from "../sidenav";

class PageScroller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: null
        };
        this.reactPageScroller = null;
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
      }


    goToPage = (pageNumber) => {
        if (this.reactPageScroller) {
            return this.reactPageScroller.goToPage(pageNumber)
        }
    }

    handleResize = () => this.setState({
        screenWidth: window.innerWidth
      });


    render() {
        const screen = this.state.screenWidth;
        console.log(screen);
        const { goToPage, onPageScroll } = this.props;

        if (typeof goToPage !== 'undefined' && goToPage !== false) {
            this.goToPage(goToPage);
            onPageScroll && onPageScroll();
        }

        return (
            <div>
                {
                    screen >= 1024 ? (
                        <div>
                            <ReactPageScroller
                                ref={c => this.reactPageScroller = c}
                                animationTimer={800}
                            >
                                {this.props.children}
                            </ ReactPageScroller>
                            <SideNav pages={this.props.pages} goToPage={this.goToPage}/>
                        </div>
                    ) : (
                        <div>
                            {this.props.children}
                        </div>
                    )
                }
            </div>
        );
    }
}

export default PageScroller;
