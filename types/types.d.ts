declare interface GreetingProps {
  name: string;
  age?: number;
}

declare interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

declare interface IPostWithLike extends IPost {
  like: number;
}
