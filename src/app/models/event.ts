export interface Event{
  eid?: string;
  uid?: string;
  name?: string | null;
  description?: string | null;
  longitude?: number;
  latitude?: number;
  like?: number;
  dislike?: number;
  userlikelist?: string[] | null;
  userdislikelist?: string[] | null;
}
