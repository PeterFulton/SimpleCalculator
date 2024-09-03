import React from 'react';
import Calculator from './components/Calculator';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <div className="App">
            <div data-testid="calculator">
                <Calculator />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />        
</div>
    );
}

export default App;
