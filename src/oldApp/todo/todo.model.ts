
export class TodoModel{
  id: Number;
  name: string;
  isDone: boolean;


  constructor(id? : Number, name? : string, isDone?: boolean) {
    this.id = id || -1;
    this.name = name || "";
    this.isDone = isDone || false;
  }
}

export class TodoViewModel extends TodoModel {
  isEditing : boolean = false;
}


//NOTE: Below logic can be easily abstracted to IModelFactory that calls default constructor
export class TodoViewModelFactory {
  static Make(todoModel : TodoModel) : TodoViewModel {
    let viewModel : TodoViewModel = new TodoViewModel();

    Object.keys(todoModel).forEach(prop => {
      //For every property in todoModel, set it to this:
      viewModel[prop] = todoModel[prop];
      //This is safe to do because TodoViewModel extends TodoModel.
      //And here we place custom properties in our object:
      viewModel.isEditing = false;
    });

    return viewModel;
  }

  static MakeList(todoModels : Array<TodoModel>) : Array<TodoViewModel> {
     if (todoModels === null) return null;

     let viewModelList : Array<TodoViewModel> = new Array<TodoViewModel>();
     todoModels.forEach(todoModel => {
       viewModelList.push(TodoViewModelFactory.Make(todoModel));
     });

     return viewModelList;
  }


}
