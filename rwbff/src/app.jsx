import styles from './index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.heading}>Heroes and Villains</h1>
        <div className={styles.tabs}>  
		     <div className={styles.tab}>
		         <input type="radio" id="tab-1" name="tab-group-1" checked></input>
		         <label for="tab-1">C-3P0</label>
		         <div className={styles.content} aria-labelledby="tab-1" aria-hidden="false" role="tabpanel">
		              <svg aria-hidden="true"><a href="#c3p0"></a></svg>
		              <h2>C-3P0</h2>
		              <p>2,983 ponts</p>
		         </div> 
		     </div>  
		     <div className={styles.tab}>
		         <input type="radio" id="tab-2" name="tab-group-1"></input>
		         <label for="tab-2">Darth Vadar</label>
		         <div className={styles.content} aria-labelledby="tab-2" aria-hidden="true" role="tabpanel">
		             <svg aria-hidden="true"><use href="#vadar"></use></svg>
		             <h2>Darth Vadar</h2>
		             <p>2,676 ponts</p>
		         </div> 
		     </div>
		     <div className={styles.tab}>
		         <input type="radio" id="tab-3" name="tab-group-1"></input>
		         <label for="tab-3">BB-8</label>
		         <div className={styles.content} aria-labelledby="tab-3" aria-hidden="true" role="tabpanel">
		            <svg aria-hidden="true"><use href="#bb8"></use></svg>
		            <h2>BB-8</h2>
		            <p>1,292 ponts</p>
		         </div> 
		     </div> 
		     <div className={styles.tab}>
		         <input type="radio" id="tab-4" name="tab-group-1"></input>
		         <label for="tab-4">Boba Fett</label>
		         <div className={styles.content} aria-labelledby="tab-4" aria-hidden="true" role="tabpanel">
		             <svg aria-hidden="true"><use href="#fett"></use></svg>
		              <h2>Boba Fett</h2>
		              <p>872 ponts</p>
		         </div> 
		     </div>
		</div>
      </div>
    )
  }
}
