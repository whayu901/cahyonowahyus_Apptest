import { filter } from "lodash";

export function applySortFilter(array: any, query: any) {
  const stabilizedThis = array.map((el: any, index: number) => [el, index]);

  if (query) {
    return filter(
      array,
      (_user: any) =>
        _user.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
  }
  return stabilizedThis.map((el: any) => el[0]);
}
