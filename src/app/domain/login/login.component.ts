import { SecurityService } from '@ab/global/security.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private service: SecurityService) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onLogin(): void {
    const credentials = this.form.value;
    this.service.loginWithCredentials(credentials);
  }
}
