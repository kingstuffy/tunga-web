import React, { Component } from "react";
import SideNav from "../../../components/sidenav";


class PageScroll extends Component {
    constructor(props) {
        super(props);

        this.isWheeling = false;
        this.state = { currentPage: 0 };
        this.currentStep = 0;

        this.containerRef = React.createRef();
        this.onWheel = this.onWheel.bind(this);
        this.goToPage = this.goToPage.bind(this);
        this.scroll = this.scroll.bind(this);
        this.steps = [];
        this.pages = [];
    }


    componentWillMount() {
        this.isWheeling = false;
        window.addEventListener('resize', () => {
            this.currentStep = 0;
            this.containerRef.current.style.transform = `translate3d(0, 0, 0)`;
            window.setTimeout(() => {
                this.computeSteps();
            }, 600);
        });
    }


    componentDidMount() {
        this.computeSteps();
    }


    computeSteps() {
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
            const y = window.scrollY + rect.top;

            // console.log(this.currentStep, oldSteps[this.currentStep] && oldSteps[this.currentStep].el === el);
            /*if (this.currentStep && oldSteps[this.currentStep].el === el) {
                this.currentStep = stepIndex;
            }*/

            // console.log(rect.top, y, window.scrollY, offsetHeight );
            if (y <= window.scrollY && window.scrollY <= y + offsetHeight) {
                // this.currentStep = stepIndex;
                if (this.steps[this.currentStep]) {
                    // this.scroll({ direction: 'down' });
                }
            }

            let currentPage = 0;

            if (offsetHeight <= windowHeight) {
                this.steps.push({ y, el, page: stepIndex });
                currentPage = this.steps.length - 1;
            } else {
                this.steps.push({ y, el, page: stepIndex });
                currentPage = this.steps.length - 1;
                this.steps.push({
                    el,
                    y: (y + offsetHeight - windowHeight),
                    page: stepIndex
                });
            }

            if (this.props.pages[stepIndex]) {
                this.pages[stepIndex] = currentPage;
            }
        });
    }


    goToPage(pageNumber) {
        const direction = this.currentStep > pageNumber ? 'up' : 'down';
        const currentPage = this.currentStep > pageNumber ? pageNumber + 1 : pageNumber - 1;
        this.currentStep = this.pages[currentPage];
        this.scroll({ direction });
    }


    onWheel(e) {
        if (this.isWheeling) {
            return false;
        }

        window.setTimeout(() => {
            this.isWheeling = false;
        }, 1200);

        this.isWheeling = true;
        const direction = this.findScrollDirection(e);

        this.scroll({ direction });
        return false;
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


    render() {
        const self = this;

        return (
            <div>
                <div style={{ transition: 'transform 800ms', height: '100vh' }} ref={self.containerRef}
                     onWheel={self.onWheel}>
                    {self.props.children}
                </div>
                <SideNav currentPage={this.state.currentPage} pages={this.props.pages} goToPage={this.goToPage}/>
            </div>
        );
    }
}

export default PageScroll;
