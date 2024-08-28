import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import { PAGE_ROUTES } from "@/utils/data/links";

type Props = {};

const Menu = (props: Props) => {
  return (
    <nav className="menu relative ">
      {PAGE_ROUTES.map((item, index) => (
        <div className="w-full grid place-items-center" key={index}>
          <PageTransitionLink
            className="menu__item  font-extrabold text-5xl md:text-7xl lg:text-9xl font-fancy z-20"
            href={item.href}
          >
            {item.title}
          </PageTransitionLink>
          <div
            className="menu__line font-extrabold text-5xl md:text-7xl lg:text-9xl font-fancy z-10"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            key={index}
          ></div>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
