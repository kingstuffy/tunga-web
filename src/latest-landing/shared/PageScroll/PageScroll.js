import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { kebabCase } from 'lodash';
import SideNav from "../../../components/sidenav";
import JumpToTop from "./JumpToTop/JumpToTop";


class PageScroll extends Component {
    constructor(props) {
        super(props);

        this.isWheeling = false;
        this.isScolling = false;
        this.resizing = false;
        this.currentStep = 0;
        this.steps = [];
        this.pages = [];
        this.containerRef = React.createRef();

        this.state = {
            currentPage: 0,
            windowWidth: 0,
            windowHeight: 0,
        };

        this.onWheel = this.onWheel.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
        this.goToPage = this.goToPage.bind(this);
        this.scroll = this.scroll.bind(this);
        this.isMobile = this.isMobile.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
        this.updatePageHash = this.updatePageHash.bind(this);
        this.onPageLoad = this.onPageLoad.bind(this);
    }


    componentWillMount() {
        this.isWheeling = false;
        this.updateWindowDimensions();
    }


    componentDidMount() {
        if (this.isMobile()) {
            return;
        }

        document.querySelector('body').style.height = '100vh';
        document.querySelector('body').style.overflowY = 'hidden';
        this.updateWindowDimensions();
        window.addEventListener('resize', this.onWindowResize);
        window.addEventListener('keydown', this.onKeydown);

        if (this.containerRef.current) {
            this.computeSteps();
        }

        const currentIndex = this.props.pages.findIndex((page) => {
            return `#${kebabCase(page.title)}` === this.props.location.hash;
        });
        const currentPage = this.props.pages[currentIndex || 0];

        this.updatePageHash(currentPage);
        if (currentIndex) {
            this.goToPage(currentIndex);
        }
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
        window.removeEventListener('keydown', this.onKeydown);
    }


    componentDidUpdate() {
        const currentIndex = this.props.pages.findIndex((page) => {
            return `#${kebabCase(page.title)}` === this.props.location.hash.split('?')[0];
        });
        if (currentIndex) {
            this.goToPage(currentIndex);
        }
    }


    updatePageHash(page) {
        if (!page) {
            return;
        }

        const slug = `#${kebabCase(page.title)}`;
        const search = this.props.location.search || '';
        this.props.history.push(`${slug}${search}`);
    }


    onPageLoad() {
        this.onWindowResize();
    }


    onWindowResize() {
        const date = new Date;
        const resizeTime = date.getTime();
        this.lastResizeTime = resizeTime;

        window.setTimeout(() => {
            if (this.lastResizeTime !== resizeTime) {
                return;
            }

            this.updateWindowDimensions();
            if (this.isMobile()) {
                document.querySelector('body').style.height = 'auto';
                document.querySelector('body').style.overflowY = 'auto';
                return;
            }

            if (this.containerRef.current) {
                const yOffset = this.steps[this.currentStep].y;
                this.computeSteps({ yOffset });
                const currentStep = this.steps.map(({ page }) => page === this.state.currentPage).indexOf(true);
                this.currentStep = currentStep;
                this.goToPage(this.state.currentPage, true);
            }
        }, 400);
    }


    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }


    isMobile() {
        return typeof this.state.windowWidth !== 'undefined' && this.state.windowWidth <= 992;
    }


    computeSteps({ yOffset } = { yOffset: 0 }) {
        const offsetY = this.steps.length ? this.steps[0].y : 0;
        this.steps = [];
        this.pages = [];

        this.containerRef.current.childNodes.forEach((el) => {
            el.style.minHeight = '100vh';
        });

        const w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            windowHeight = w.innerHeight || e.clientHeight || g.clientHeight;

        this.containerRef.current.childNodes.forEach((el, stepIndex) => {
            const { offsetHeight } = el;
            const rect = el.getBoundingClientRect();
            const y = window.scrollY + rect.top + yOffset;
            let currentPage = 0;

            if (offsetHeight <= windowHeight) {
                this.steps.push({ y, el, page: stepIndex });
                currentPage = this.steps.length - 1;
            } else {
                this.steps.push({ y, el, page: stepIndex });
                currentPage = this.steps.length - 1;
                const diff = Math.ceil((offsetHeight - windowHeight) / windowHeight);

                for (let i = diff; i > 0; i--) {
                    this.steps.push({
                        el,
                        y: (y + offsetHeight - (windowHeight * i)),
                        page: stepIndex
                    });
                }
            }

            if (this.props.pages[stepIndex]) {
                this.pages[stepIndex] = currentPage;
            }
        });
    }


    onUrlNav(url) {
        this.props.history.push(url);
    }


    goToPage(pageNumber, reload) {
        if (this.isMobile()) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            return;
        }

        if (pageNumber && pageNumber === this.state.currentPage && !reload) {
            return;
        }

        const direction = this.state.currentPage > pageNumber ? 'up' : 'down';
        const currentPage = this.state.currentPage > pageNumber ? pageNumber + 1 : pageNumber - 1;
        const stepsMap = this.steps.map(({ page }) => page === currentPage);
        this.currentStep = direction === 'down' ? stepsMap.lastIndexOf(true) : stepsMap.indexOf(true);
        this.scroll({ direction });
    }


    onWheel(e) {
        if (this.isMobile()) {
            return;
        }

        if (this.isWheeling) {
            return false;
        }

        window.setTimeout(() => {
            this.isWheeling = false;
        }, 1400);

        this.isWheeling = true;
        const direction = this.findScrollDirection(e);

        this.scroll({ direction });
        return false;
    }


    onKeydown(event) {
        if (this.isMobile()) {
            return;
        }

        if (this.isScolling) {
            return false;
        }

        window.setTimeout(() => {
            this.isScolling = false;
        }, 850);

        this.isScolling = true;
        const direction = this.findKeyDirection(event);

        if (direction) {
            this.scroll({ direction });
        }
    }


    scroll({ direction }) {
        if ((direction === 'up' && this.currentStep === 0) || (direction === 'down' && this.currentStep === this.steps.length - 1)) {
            return;
        }

        const nextStep = direction === 'down' ? 1 : -1;
        this.currentStep = this.currentStep + nextStep;
        const { y, page } = this.steps[this.currentStep];
        this.setState({ currentPage: page });
        this.containerRef.current.style.transform = `translate3d(0, -${y}px, 0)`;

        this.updatePageHash(this.props.pages[page]);
    }


    findScrollDirection(event) {
        var delta;

        if (event.wheelDelta) {
            delta = event.wheelDelta;
        } else {
            delta = -1 * event.deltaY;
        }

        if (delta < 0) {
            return 'down';
        } else if (delta > 0) {
            return 'up';
        }
    }


    findKeyDirection(event) {
        if (parseInt(event.keyCode, 10) === 38) {
            return 'up';
        } else if (parseInt(event.keyCode, 10) === 40) {
            return 'down';
        }

        return false;
    }


    render() {
        const self = this;
        const { goToPage, onPageScrolled } = this.props;
        const isMobile = this.isMobile();
        console.log(this.state.currentPage);

        if (typeof goToPage !== 'undefined' && goToPage !== false) {
            onPageScrolled && onPageScrolled();
            this.goToPage(goToPage);
        }

        const sections = React.Children.map(self.props.children, child =>
            React.cloneElement(child, { onUrlNav: this.onUrlNav, onPageLoad: this.onPageLoad })
        );

        return (
            <div>
                <div style={{ transition: 'transform 800ms', height: '100vh' }} ref={self.containerRef}
                     onWheel={self.onWheel}>
                    {sections}
                </div>
                <SideNav currentPage={this.state.currentPage} pages={this.props.pages} goToPage={this.goToPage}/>
                <JumpToTop isMobile={isMobile} currentPage={this.state.currentPage} goToPage={this.goToPage}/>
            </div>
        );
    }
}

const PageScrollWithRouter = withRouter(PageScroll);


export default PageScrollWithRouter;
