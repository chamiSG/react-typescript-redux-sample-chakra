

export type CharacterDetailProps = {
  character?: ICharacter;
  episodes?: Array<IEpisode>;
  fetchCharacter?: (id: string | undefined) => void;
};

export interface IOrigin {
  name?: string,
  url?: string,
}

export interface ICharacter {
  id?: any,
  name?: string,
  status?: string,
  species?: string,
  type?: string,
  url?: string,
  image?: string,
  gender?: string,
  episode?: Array<string>,
  origin?: IOrigin,
  created?: string,
  loading: boolean
}

export interface ITextWithlabel {
  label?: string,
  text?: string | number,
  isBadge?: boolean,
  badgeColor?: string,
}

export interface IEpisodeType {
  data?: IEpisode[],
  loading?: boolean,
}

export interface IEpisode {
  id?: number,
  name?: string,
  air_date?: string,
  episode?: string,
}

export interface IFilterParam{
  name?: string | undefined,
  status?: string | undefined,
  gender?: string | undefined,
  page?: number | undefined,
}

