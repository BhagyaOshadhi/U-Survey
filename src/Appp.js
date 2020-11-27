import React,{Component} from 'react'
import Form from './Components/Form'
class Appp extends Component{
    constructor(props){
        super(props)
        this.state={
            recipes:[],
            name:""
        }
        this.getRecipe=this.getRecipe.bind(this);
    }
    getRecipe = () =>{
        // const recipeName = e.target.elements.recipeName.value;
        // e.preventDefault();
        // const api_call =  await fetch(`https://cors-anywhere.herokuapp.com/https://postman-echo.com/get?foo1=bar1&foo2=bar2`);
        // const data = await api_call.json();
        const data = {
            recipes: [
                {
                    image_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.immediate.co.uk%2Fproduction%2Fvolatile%2Fsites%2F30%2F2020%2F08%2Fcarrot-cake-8d8dfb5.jpg%3Fquality%3D90%26resize%3D500%252C454&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fclassic-cake-recipes&tbnid=SpofA05EGCUC-M&vet=12ahUKEwi88NiI55jtAhVXNCsKHcA5ARsQMygCegUIARCBAg..i&docid=xFbcH3uFOqhYZM&w=500&h=454&q=cake&ved=2ahUKEwi88NiI55jtAhVXNCsKHcA5ARsQMygCegUIARCBAg",
                    title:"classic cake",
                    publisher:"BBC GoodFood",
                    publisher_url:"bbcgoodfood.com",
                    
                },
                {
                    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHbGTWH4txueqesV9x_Vi7YRnUv44693zgA&usqp=CAU",
                    title:"chocalate timeline",
                    publisher:"Time Toast-",
                    publisher_url:"timetoast.com",
                }
            ]
        }
        console.log("data.recipes=",data.recipes);
        // this.setState({recipes:data.recipes})
        // console.log("this.state.recipes",this.state.recipes)
        this.setState({ recipes: data.recipes });
        console.log("this.state.recipes",this.state.recipes);
    }

    // componentDidUpdate(params) {
    //      this.setState({ recipes:this.getRecipe.data.recipes });
    //      this.setState({name:"bhagya"})
    // }
    chaneName(){
        this.setState({name:"bhagya"});
        console.log(this.state.name)
    }

    render(){
         return(
            <div className="App">
                {/* className="App-header" */}
                <header >
                     <h1>Recipe Search{this.state.recipes}</h1>
                     <p>{this.state.recipes}</p>
                </header> <p>{this.state.recipes}</p>
                <Form getRecipe={this.getRecipe}/>
               
              
            </div>
         );
     }
}
export default Appp