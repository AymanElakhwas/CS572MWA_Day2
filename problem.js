const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 
console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false


function find(fileName){
    return (tree)=>{
        if(tree.files.find(((e)=> e == fileName)))
            return true;
        for(key in tree.subFolders){
            let found = find(fileName)(tree.subFolders[key]);
            if(found)
                return true;
        }
        return false;
    }
}