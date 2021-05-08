import React from 'react';
import './BootstrapForm.css';


function BForm(){
    return(
        <div className=" ml-5 mt-5 mr-5">
            <h1>bootstrap</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                     <h5>Sizing</h5>
                     {/* <h5>Set heights using classes like .form-control-lg and .form-control-sm.</h5> */}
                    <br/>
                    <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"/>
                    <input class="form-control" type="text" placeholder="Default input"/>
                    <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm"></input>
                    <br/>
                    <h5>Readonly</h5>
                    <input class="form-control" type="text" placeholder="Readonly input here…" readonly></input>
                    <h5>disabled</h5>
                    <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled></input>
                </div>
                <br/>
                <h5>checkboxes default</h5>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                        Default checkbox
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled/>
                    <label class="form-check-label" for="defaultCheck2">
                        Disabled checkbox
                    </label>
                </div>
                <br/>
                <h5>Inline</h5>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label class="form-check-label" for="inlineCheckbox2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                </div>
                <br/>
                <br/>
                <h5>Form row.More complex layouts can also be created with the grid system.</h5>
                <br/>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <br/>
                <h5>Horizontal form label sizing</h5>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>
                    </div>
                </div>

                <h5>column sizing</h5>
                <div class="form-row">
                    <div class="col-6">
                        <input type="text" class="form-control" placeholder="City"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="State"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Zip"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

           
        </div>
    )
}
export default BForm;