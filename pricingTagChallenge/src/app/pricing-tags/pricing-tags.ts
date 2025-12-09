import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-tags',
  imports: [],
  templateUrl: './pricing-tags.html',
  styleUrl: './pricing-tags.css',
})
export class PricingTags {
  tags = [
    {
      profil: 'Basic',
      price: '19.99$',
      Allowed: '2 User allowed',
      stockage: '500 GB storage',
      users: 'send up to 3GB',
    },
    {
      profil: 'Professional',
      price: '24.99$',
      Allowed: '5 User allowed',
      stockage: '1 TB storage',
      users: 'send up to 10GB',
    },
    {
      profil: 'Expert',
      price: '39.99$',
      Allowed: '10 User allowed',
      stockage: '2 TB storage',
      users: 'send up to 20GB',
    },
  ];
}
