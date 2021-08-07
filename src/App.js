
import Inline from './components/inline/Inline'
import StyleSheet from './components/stylesheet/StyleSheet'

import './styles.css'
import styles from './styles.module.css'

const App = () => {
    return (
        <div>
            <h1> Styling in React</h1>

            {/* <Inline /> */}

            {/* <StyleSheet isPrimary={true}/> */}

            <h1 className='error'>Something went wrong</h1>
            <h1 className={styles.success}> 200 OK Success </h1>

        </div>
    );
};

export default App;
