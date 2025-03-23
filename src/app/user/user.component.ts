import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

// type User = {
//   id:string,
//   avatar: string,
//   name: string,
// }

interface User {
  id:string,
  avatar: string,
  name: string,
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  files: any[] = [];

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
