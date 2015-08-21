<?php

namespace UAM\Bundle\MaintenanceBundle\Filter\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class MaintenenceFilterType extends AbstractType
{
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'translation_domain' => 'maintenence',
        ));
    }

    public function getName()
    {
        return 'maintenence_filters';
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('date', 'date', array(
            'label' => 'filter.date.label',
            'attr' => array(
                'class' => 'datepicker',
            ),
            'format' => 'yyyy.MM.dd HH:mm:ss',
            'widget' => 'single_text',
        ));
    }
}
