import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credential } from '../models/Credential';
import { CredentialService } from '../services/credential.service';

@Component({
  selector: 'app-credentials',
  standalone: false,

  templateUrl: './credentials.component.html',
  styleUrl: './credentials.component.css'
})
export class CredentialsComponent {

  constructor(private credentialService: CredentialService, private router: Router) {}

  credentials: Credential[] = [];

  ngOnInit() {
    this.credentialService.getCredentials().subscribe(data => {
      this.credentials = data;
    });
  }

  addNewCredential(): void {
    this.router.navigate(['/credential-form']); // Navigate to the form for new credential
  }
}
