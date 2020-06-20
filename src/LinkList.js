import React, { Component } from 'react'
import Link from './Link'
import './LinkList.css'

class LinkList extends Component  {
    state= {
      links: [
        {
          url: 'https://www.linkedin.com/pulse/compose-me-function-composition-javascript-kevin-greene',
          title: 'Compose me That: Function Composition in JavaScript'
        },
        {
          url: 'https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10',
          title: 'Functional JavaScript: Function Composition For Every Day Use'
        },
        {
          url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/',
          title: 'Imperative vs Declarative Programming'
        },
        {
          url: 'https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js',
          title: 'Difference between declarative and imperative in React.js?'
        },
        {
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
          title: 'Array Mapping'
        },
        {
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
          title: 'Array Filtering'
        },
        {
          url: 'https://facebook.github.io/react/docs/optimizing-performance.html#avoid-reconciliation',
          title: 'Virtual DOM'
        },
        {
          url: 'https://facebook.github.io/react/docs/reconciliation.html#the-diffing-algorithm',
          title: 'The Diffing Algorithm'
        },
        {
          url: 'https://medium.com/%40gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e',
          title: 'How Virtual-DOM and diffing works in React'
        },
        {
          url: 'https://facebook.github.io/react/docs/thinking-in-react.html',
          title: 'Thinking in components'
        },
        {
          url: 'https://facebook.github.io/react/docs/rendering-elements.html',
          title: 'Rendering Elements'
        },
        {
          url: 'https://github.com/facebookincubator/create-react-app',
          title: 'create-react-app'
        },
        {
          url: 'https://reactjs.org/docs/components-and-props.html',
          title: 'Components and Props'
        },
        {
          url: 'https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/',
          title: 'Functional Components vs. Stateless Functional Components vs. Stateless Components'
        },
        {
          url: 'https://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live',
          title: 'Identify Where Your State Should Live'
        },
        {
          url: 'https://facebook.github.io/react/docs/state-and-lifecycle.html',
          title: 'Using State Correctly'
        },
        {
          url: 'https://www.npmjs.com/package/prop-types',
          title: 'prop-types'
        },
        {
          url: 'https://facebook.github.io/react/docs/typechecking-with-proptypes.html',
          title: 'Typechecking With Proptypes'
        },
        {
          url: 'https://github.com/facebook/react-devtools',
          title: 'React Dev Tools Docs'
        },
        {
          url: 'https://facebook.github.io/react/docs/thinking-in-react.html',
          title: 'Thinking in React'
        },
        {
          url: 'https://facebook.github.io/react/docs/forms.html',
          title: 'Controlled Components'
        },
        {
          url: 'https://www.duncanleung.com/blog/2017-07-15-avoiding-react-setstate-pitfalls/',
          title: 'Avoiding React SetState() Pitfalls'
        },
        {
          url: 'https://codeburst.io/how-to-not-react-common-anti-patterns-and-gotchas-in-react-40141fe0dcd',
          title: 'How to NOT React: Common Anti-Patterns and Gotchas in React'
        },
        {
          url: 'https://reactjs.org/docs/react-component.html#shouldcomponentupdate',
          title: 'shouldComponentUpdate()'
        },
        {
          url: 'https://facebook.github.io/react/docs/react-component.html#componentdidmount',
          title: 'componentDidMount()'
        },
        {
          url: 'https://facebook.github.io/react/docs/react-component.html#componentwillunmount',
          title: 'componentWillUnmount()'
        },
        {
          url: 'https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle',
          title: 'Component Lifecycles'
        },
        {
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation',
          title: 'Short Circuit Evaluation'
        }
      ]
    }

    render() {
      const links = this.state.links
      return (
        <div className='Card-container'>
          {links.map((link) => (
            <div key={link.url} className='Card'>
              <Link url={link.url} text={link.title} />
            </div>
          ))}
        </div>
      )
    }
  }

  export default LinkList