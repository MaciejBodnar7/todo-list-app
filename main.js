let input = prompt('Welcome to TODO app. Type "new" to add, "list" to show list, "delete" to remove specific todo and "quit" or "q" to quit app');

const todos = ['collect egs', 'clean litter box'];

while (input !== 'quit' && input !== 'q') {  // Loop działa do mementu wpisania quit i q
    if (input === 'list') {
        for (i = 0; i < todos.length; i++ ) {
            console.log(`${i}: ${todos[i]}`);
        }
        alert('Check console for your list');
    } else if (input === 'new') {
        const newTodo = prompt('What would you like to add?');
        todos.push(newTodo);        //Dopusje do array nową wartość
        alert(`You added ${newTodo} to the list`);
    } else if (input === 'delete') {
        const index = prompt('Enter number to delete');
        const deleted = todos.splice(index, 1);
        console.log(`Deleted ${deleted[0]}`)
        alert(`Deleted ${deleted[0]}, check your console`)
    }

    input = prompt('Type "new" to add, "list" to show list, "delete" to remove specific todo and "quit" or "q" to quit app');
}
alert('quiting app');