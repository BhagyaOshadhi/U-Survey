import React from 'react';

function HoverFocus(){
    return(
        <div className= "p-20 bg-green-100">
            <form>
                <h6>Focus</h6>
                <input
                    className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent py-2 px-4 rounded ..."/>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 py-2 px-4 rounded ...">
                        Sign up
                    </button>
                <br/>
                <br/>
                <h6>Hover</h6>
                <button className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded ...">
                    Hover me
                </button>
                <br/>
                <h6>Active</h6>
                <button className=" py-2 px-4 rounded  bg-green-500 active:bg-green-700 ...">
                    Active
                </button>
                <br/>
                <br/>
                <h6>Group-hover</h6>
                <div className="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
                    <p className="text-indigo-600 group-hover:text-gray-900 ...">New Project</p>
                    <p className="text-indigo-500 group-hover:text-gray-500 ...">Create a new project from a variety of
                        starting templates.</p>
                </div>
                <h6>
                    Disabled</h6>
                 <button className="disabled:opacity-450  bg-red-500 hover:bg-red-700 py-2 px-4 rounded mr-5 ...">
                    Submit
                </button>
                <button className="disabled:opacity-50 bg-red-500 hover:bg-red-700 py-2 px-4 rounded ml-5..." disabled>
                    Submit
                </button>
                <br/>
                <h6>
                    Visited</h6>
                <h1><a href="#" className="text-blue-900 visited:text-red-900 ...">Im red after visited</a></h1>
            </form>
        </div>
    );
}
export default HoverFocus;