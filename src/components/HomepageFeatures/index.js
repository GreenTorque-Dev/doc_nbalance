import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intelligent Load Balancing',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        NBalance intelligently distributes incoming traffic across multiple servers
        to ensure high performance, reliability, and zero single point of failure.
      </>
    ),
  },
  {
    title: 'Advanced Security',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        Protect your applications with built-in security features such as traffic filtering,
        threat prevention, and secure access control.
      </>
    ),
  },
  {
    title: 'High Availability',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        NBalance ensures your applications stay online with automatic failover,
        continuous monitoring, and smart traffic management.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>

        <div className={styles.iconWrap}>
          <Svg className={styles.featureSvg} role="img" />
        </div>

        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDesc}>{description}</p>
        </div>

      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
