import PatientList from "../components/Total/Pages/Patients/PatientsList";

const useFilter = ({ filterName, filterTag, filterDate }) => {
  const filterdate = `${filterDate.getDate()}-${
    filterDate.getMonth() + 1
  }-${filterDate.getFullYear()}`;

  return PatientList.filter((item) => {
    return filterTag.toLowerCase() === "" &&
      filterName.toLowerCase() === "" &&
      filterdate === ""
      ? item
      : item.appointment.date.toLowerCase().includes(filterdate) &&
          item.official.tag.toLowerCase().includes(filterTag) &&
          item.personal.FirstName.toLowerCase().includes(filterName);
  });
};

export default useFilter;
