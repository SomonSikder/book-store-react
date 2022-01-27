import BrowseElements from "./BrowseElements";
const BrowsePanel = (props) => {
  return (
    <section className="sidebar-nav">
      <BrowseElements type="categories" name="Categories"/>
      <BrowseElements type="author" name="Author"/>
      <BrowseElements type="publishers" name="Publishers"/>
    </section>
  );
};

export default BrowsePanel;
