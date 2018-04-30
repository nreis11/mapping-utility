import React from 'react';


export class TypeSelector extends React.Component {
    render() {
        return(
            // <div className="container">
            //   <div className="row">

                  <form>
                      <div className="col-sm-1">
                        <div className="radio">
                          <label>
                            <input type="radio" value="category" name='type' checked={true} />
                            Category
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-1">
                        <div className="radio">
                          <label>
                            <input type="radio" value="industry" name='type' />
                            Industry
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-1">
                        <div className="radio">
                          <label>
                            <input type="radio" value="state" name='type' />
                            State
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-1">
                        <div className="radio">
                          <label>
                            <input type="radio" value="country" name='type' />
                            Country
                          </label>
                        </div>
                      </div>
                  </form>

            //   </div>
            // </div>
        )
    }
}

export default TypeSelector;



