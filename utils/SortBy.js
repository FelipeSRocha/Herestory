import { useRouter } from "next/router";

const sort =(list, orderBy)=>{
    if (list.length > 0) {
        list.sort(function (a, b) {
            return new Date(b[orderBy]) - new Date(a[orderBy]);
        });
    }
    return list
}
export default sort
