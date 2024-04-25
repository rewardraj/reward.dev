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
  <section className={styles.Featured} aria-label="Featured section">
    <h4 aria-label="Number">{number}</h4>
    <p aria-label="Description">{description}</p>
  </section>
);
