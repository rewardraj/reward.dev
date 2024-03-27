import styles from "./ProfileDetail.module.scss";

interface ProfileDetailProps {
  label: string;
  value: string | JSX.Element;
}

export const ProfileDetail: React.FC<ProfileDetailProps> = ({
  label,
  value,
}) => (
  <li>
    <strong>{label}:</strong> {value}
  </li>
);

interface FeaturedProps {
  number: string;
  description: string;
}

export const Featured: React.FC<FeaturedProps> = ({ number, description }) => (
  <div className={styles.Featured}>
    <h4>{number}</h4>
    <p>{description}</p>
  </div>
);
