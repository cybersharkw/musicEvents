export type Organizer = {
  id: number;
  lastName: string | null;
  firstName: string | null;
  email: string;
  company: string;
  street: string;
  plz: number;
  place: string;
  imageUrl: string | null;
  createdAt: Date;
};