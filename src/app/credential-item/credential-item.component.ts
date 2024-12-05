import {Component, Input} from '@angular/core';
import { Credential } from '../models/Credential';
import {CredentialService} from '../services/credential.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-credential-item',
  standalone: false,

  templateUrl: './credential-item.component.html',
  styleUrl: './credential-item.component.css'
})
export class CredentialItemComponent {
  @Input() credential: Credential;

  constructor(private credentialService: CredentialService, private router: Router){
    this.credential =
      {
        id: 1,
        name: "",
        password: ""
      }
  }

  deleteCredential(credential: Credential): void {
    this.credentialService.deleteCredentials(credential).subscribe(result => {
    })
    alert("Password deleted successfully");
    this.router.navigate(['/']);
  }

  updateCredential(credential: Credential): void {
    this.router.navigate(['/form', { id: credential.id }]);
  }

}
